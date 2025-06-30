import React from 'react';

type VideoContainerProps = {
    videoSrc: string;
    children?: React.ReactNode;
}
export default function VideoContainer({ videoSrc, children }: VideoContainerProps) {
    return (
        <section className="relative w-screen bg-beePrimary-darkest justify-center overflow-hidden flex flex-col">

            {videoSrc && (
                <video className="absolute top-50 left-50 w-full h-full object-cover opacity-20" autoPlay muted loop playsInline>
                    <source key={videoSrc} src={videoSrc} type="video/mp4" />
                    Seu broser não suporta video
                </video>
            )}

            <div className="mx-auto px-4 md:px-20 pt-40 pb-28 items-center">
                {children}
            </div>
        </section>
    )
}


