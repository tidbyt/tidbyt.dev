// TODO: all of the sorting is implicit from Webpack. We should actually sort
// everything based on the number prefix.
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
    let doc: Doc = {
        name: genName(name),
        url: genURL(path),
        path: path,
        source: DOCS(path).default,
    }

    return doc;
}

export function genURL(path: string): string {
    let converted = path.replace('.md', '').replace('../', '').replace('./', '');
    let removeSort = converted.replace(/\d\d_/g, '');
    let convertUnderscores = removeSort.replace(/_/g, '-');
    let url = `/docs/${convertUnderscores}`;
    return url;
}

// TODO: support relative paths in nested directories. Example ../ in multiple
// levels of nesting.
export function convertRelativePath(path: string, currURL: string): string {
    // If the doc is in the same directory, return the current url prefixed to
    // the path.
    let pruneDocs = currURL.replace('/docs/', '');
    let parts = pruneDocs.split('/');
    if (path.startsWith('./') && parts.length > 1) {
        let dirs = parts.slice(0, parts.length - 1);
        let prefix = dirs.join('/')
        return path.replace('./', `${prefix}/`);
    }

    // If the doc is relatively linked, it works by default so long as it's relative
    // to the doc root.
    return path;
}

export function genName(path: string): string {
    let parts = path.split("/");
    let fileName = parts[parts.length - 1].replace('.md', '');
    let removeSort = fileName.replace(/\d\d_/g, '');
    let name = titleCase(removeSort.replace(/_/g, ' '));
    return name;
}

export function cleanFolderName(name: string): string {
    let removeSort = name.replace(/\d\d_/g, '');
    return titleCase(removeSort.replace(/_/g, ' '));
}

export function titleCase(input: string): string {
    let str = input.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}