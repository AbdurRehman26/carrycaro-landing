import { BorderBeam } from "@site/src/components/magicui/border-beam";
import { WordRotate } from "@site/src/components/magicui/word-rotate";
import { Button } from "@site/src/components/ui/button";
import { ReactNode } from "react";

export default function Header(): ReactNode {
    return (
        <header className='container relative flex flex-col items-center justify-center'>
            <h1 className='font-bold text-[60px] text-emerald-600 dark:text-white mb-2'>CarryCaro</h1>
            <WordRotate
                className='text-3xl font-semibold mb-0'
                words={["Free", "Reliable", "Secure", "Easy to Use"]}
            />
            <p className='text-xl text-center mb-2'>A platform where people can connect with travellers from any part of the world going to or coming from a city of your desire to send and receive packages.</p>
            <div className={'flex gap-4'}>
                <div
                    className="relative overflow-hidden rounded-[9px] border border-border mt-10 shadow-lg bg-[url(/img/services-light.png)] dark:bg-[url(/img/services-dark.png)] bg-cover bg-center">
                    <img src="/img/services-light.png" alt="VitoDeploy" className="max-h-[500px] opacity-0"/>
                    <BorderBeam size={200} delay={2}/>
                </div>
                <div
                    className="relative overflow-hidden rounded-[9px] border border-border mt-10 shadow-lg bg-[url(/img/services-light.png)] dark:bg-[url(/img/services-dark.png)] bg-cover bg-center">
                    <img src="/img/services-light.png" alt="VitoDeploy" className="max-h-[500px] opacity-0"/>
                    <BorderBeam size={200} delay={4}/>
                </div>
                <div
                    className="relative overflow-hidden rounded-[9px] border border-border mt-10 shadow-lg bg-[url(/img/services-light.png)] dark:bg-[url(/img/services-dark.png)] bg-cover bg-center">
                    <img src="/img/services-light.png" alt="VitoDeploy" className="max-h-[500px] opacity-0"/>
                    <BorderBeam size={200}/>
                </div>
            </div>
            <div className="flex items-center mt-10 gap-2">
                <Button  size="lg" variant="default"
                        onClick={() => window.open("https://app.carrycaro.com", "_blank")}>
                    Go to Login
                </Button>
            </div>
        </header>
    );
}