const DOCS = require.context('../../docs', true, /\.(md)$/);

export type Doc = {
    name: string,
    url: string,
    path: string,
    source: string,
}

export function getDirs(): Map<string, Doc[]> {
    let dirs: Map<string, Doc[]> = new Map<string, Doc[]>();

    DOCS.keys().forEach((item: any) => {
        let parts = item.split("/");
        if (parts.length > 2) {
            if (!dirs.has(parts[1])) {
                dirs.set(parts[1], new Array)
            }
            dirs.get(parts[1]).push(genDoc(item));
        }
    });

    return dirs;
}

export function getDocs(): Doc[] {
    let docs: Doc[] = [];

    DOCS.keys().forEach((item: any) => {
        docs.push(genDoc(item));
    });

    return docs;
}

export function genDoc(path: string): Doc {
    let parts = path.split("/");
    let name = parts[parts.length - 1].replace('.md', '');
    let suffix = path.replace('.md', '').replace("./", '');
    let url = `/docs/${suffix}`;
    let doc: Doc = {
        name: titleCase(name),
        url: url,
        path: path,
        source: DOCS(path).default,
    }

    return doc;
}

export function titleCase(input: string): string {
    let str = input.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}