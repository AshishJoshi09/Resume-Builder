

import ai from "../configs/ai.js";
import Resume from "../models/Resume.js";

// controller for enhancing a resume's professional summary
// POST: /api/ai/enhance-pro-sum

export const enhanceProfessionalSummary = async (req, res) => {
    try {
        const { userContent } = req.body;

        if (!userContent) {
            return res.status(400).json({
                message: "Missing required fields"
            });
        }
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `
        You are an expert resume writer.

        Your task is to enhance the professional summary of a resume.

        Requirements:
        - Return ONLY the enhanced summary.
        - Do NOT provide options.
        - Do NOT provide suggestions.
        - Do NOT provide comments.
        - Do NOT provide explanations.
        - Do NOT provide bullet points.
        - Do NOT provide headings.
        - Keep it concise, professional, ATS-friendly, and impactful.
        - The summary should be 1-2 sentences.

        Summary:
        ${userContent}
        `
        });

        const enhancedContent = response.text.trim();

        return res.status(200).json({
            enhancedContent
        });

    } catch (error) {

    if (error.status === 429) {
        return res.status(429).json({
            message: "AI service is temporarily busy or quota exceeded. Please try again in a minute."
        });
    }

    return res.status(400).json({
        message: error.message
    });
}
};


// controller for enhancing a resume's job description
// POST: /api/ai/enhance-job-desc

export const enhanceJobDescription = async (req, res) => {
    try {
        const { userContent } = req.body;

        if (!userContent) {
            return res.status(400).json({
                message: "Missing required fields"
            });
        }

          const response = await ai.models.generateContent({
                model: "gemini-2.5-flash",
                contents: `
            You are an expert resume writer.

            Your task is to enhance the job description of a resume.

            Requirements:
            - Return ONLY the enhanced job description.
            - Do NOT provide options.
            - Do NOT provide suggestions.
            - Do NOT provide comments.
            - Do NOT provide explanations.
            - Do NOT provide headings.
            - Use strong action verbs.
            - Highlight responsibilities, achievements, and measurable impact.
            - Make it ATS-friendly and professional.

            Job Description:
            ${userContent}
            `
            });

            const enhancedContent = response.text.trim();

        return res.status(200).json({
            enhancedContent
        });

    } catch (error) {

    if (error.status === 429) {
        return res.status(429).json({
            message: "AI service is temporarily busy or quota exceeded. Please try again in a minute."
        });
    }

    return res.status(400).json({
        message: error.message
    });
}
};


// controller for uploading a resume to the database
// POST: /api/ai/upload-resume

export const uploadResume = async (req, res) => {
    try {

        const { resumeText, title } = req.body;
        const userId = req.userId;

        if (!resumeText) {
            return res.status(400).json({
                message: "Missing required fields"
            });
        }

        const prompt = `
            You are an expert resume parser.

            Extract all information from the resume and return ONLY valid JSON.

            Do not return markdown.
            Do not return explanations.
            Do not wrap response in \`\`\`.

            Return JSON in this exact structure:

            {
            "professional_summary": "",
            "skills": [],
            "personal_info": {
                "image": "",
                "full_name": "",
                "profession": "",
                "email": "",
                "phone": "",
                "location": "",
                "linkedin": "",
                "website": ""
            },
            "experience": [
                {
                "company": "",
                "position": "",
                "start_date": "",
                "end_date": "",
                "description": "",
                "is_current": false
                }
            ],
            "projects": [
                {
                "name": "",
                "type": "",
                "description": ""
                }
            ],
            "education": [
                {
                "institution": "",
                "degree": "",
                "field": "",
                "graduation_date": "",
                "cgpa": ""
                }
            ]
            }

            Resume:

            ${resumeText}
            `;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt
        });

        const extractedData = response.text;

        console.log("========== AI RESPONSE ==========");
        console.log(extractedData);

        const parsedData = JSON.parse(extractedData);

        const newResume = await Resume.create({
            userId,
            title,
            ...parsedData
        });

        return res.status(200).json({
            resumeId: newResume._id
        });

    } 
    catch (error) {

    console.log("========== AI ERROR ==========");
    console.log(error);

    if (error.status === 429) {
        return res.status(429).json({
            message: "AI service is temporarily busy or quota exceeded. Please try again in a minute."
        });
    }

    return res.status(400).json({
        message: error.message
    });
    }
};