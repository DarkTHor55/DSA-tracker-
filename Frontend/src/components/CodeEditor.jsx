import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { java } from "@codemirror/lang-java";
import { oneDark } from "@codemirror/theme-one-dark";

export const CodeEditor = () => {
    const [code, setCode] = useState("// Select a language and start coding...");
    const [language, setLanguage] = useState("javascript");

    // Language extensions map
    const languageExtensions = {
        javascript: javascript(),
        python: python(),
        java: java(),
    };
    return (

        <div className="p-4">
            {/* Language Dropdown */}
            <select
                className="mb-4 p-2 border rounded"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
            >
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
            </select>

            {/* Code Editor */}
            <CodeMirror
                value={code}
                height="600px"
                width="1000px"
                theme={oneDark}
                extensions={[languageExtensions[language]]}
                onChange={(value) => setCode(value)}
            />

            {/* Show Code Output */}
            <div className="mt-4 p-2 bg-gray-900 text-green-400 rounded">
                <h2 className="text-lg font-bold">Live Code:</h2>
                <pre>{code}</pre>
            </div>
        </div>
    )
}


