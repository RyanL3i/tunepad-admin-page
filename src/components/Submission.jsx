import React from 'react';
import { useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';


const Submission = ({ songSubmission }) => {
    const [showFullDescription, setShowFullDescription] = useState(false);

    if (!showFullDescription) {
        songSubmission = songSubmission.substring(0, 32) + '...'
    }

    const [play, setPlay] = useState(true)

    return (
        <>
            <div className="flex items-center w-96 justify-between bg-custom-gray h-12 border-4 border-custom-cream px-2 rounded-2xl">
                <p className="font-nunito">
                    {showFullDescription ?
                        <p className="text-xs">
                            {songSubmission}
                        </p>
                        :
                        <p className="text-base">
                            {songSubmission}
                        </p>}
                </p>
                <div className="flex gap-2">
                    <button onClick={() => setShowFullDescription(prevState => !prevState)} className="text-custom-navy ml-auto">
                        {showFullDescription ? 'Less' : 'More'}
                    </button>

                    <button onClick={() => setPlay(prevState => !prevState)}>
                        {play ? <FaPlay /> : <FaPause />}
                    </button>
                </div>
            </div>

        </>
    )
}

export default Submission
