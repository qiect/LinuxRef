export interface KeyFile {
    path: string;
    description: string;
}
export interface LinuxDirectory {
    path: string;
    name: string;
    shortName: string;
    origin: string;
    description: string;
    keyFiles: KeyFile[];
    importance: "core" | "common" | "supplementary";
    tips?: string;
    relatedCommands: string[];
}
export declare const directories: LinuxDirectory[];
