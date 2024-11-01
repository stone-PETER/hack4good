import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProblemStatements = () => {
    const navigate = useNavigate();

    const handleViewProblemStatements = () => {
        navigate('/problem-statements');
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="text-center">
                <h1 className="text-3xl font-bold mb-4">Problem Statements</h1>
                <p className="text-xl mb-6">
                    This hackathon features 20 exciting problem statements across various domains.
                </p>
                <button
                    onClick={handleViewProblemStatements}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                    View Problem Statements
                </button>
            </div>
        </div>
    );
};

export default ProblemStatements;