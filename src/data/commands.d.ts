export interface Category {
    id: string;
    name: string;
    icon: string;
    description: string;
}
export interface Example {
    description: string;
    code: string;
    output?: string;
}
export interface Command {
    name: string;
    categoryId: string;
    syntax: string;
    simpleExplain: string;
    detailExplain: string;
    helpOutput?: string;
    examples: Example[];
    relatedCommands: string[];
    dangerLevel?: "warning" | "danger";
}
export declare const categories: Category[];
export declare const commands: Command[];
