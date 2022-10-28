import { Heading } from "../components/Heading";

export function Developer() {
    return (
        <div className="bg-gray-900 flex flex-col items-center justify-center text-gray-100 p-5 rounded-lg">
            <Heading size="sm">Desenvolvido por <span className="font-bold text-cyan-500">Matheus Guissi</span></Heading>
            <div className="flex items-center justify-center gap-6 mt-3">
                <a href="https://github.com/guissimatheus/design-system-react#readme" target="_blank">
                    <img src="./gitHub-logo.png" className="h-8" alt="GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/guissimatheus/" target="_blank">
                    <img src="./linkedIn-logo.png" className="h-8 rounded" alt="LinkedIn" />
                </a>
            </div>
        </div>
    )
}