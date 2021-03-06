import type { CompileOptions } from 'svelte/types/compiler/interfaces';
import type { PreprocessorGroup } from 'svelte/types/compiler/preprocess/types';
import type { Plugin } from 'esbuild';
interface esbuildSvelteOptions {
    compileOptions?: CompileOptions;
    preprocessor?: PreprocessorGroup | PreprocessorGroup[];
    preprocess?: PreprocessorGroup | PreprocessorGroup[];
    cache?: boolean;
}
export default function sveltePlugin(options?: esbuildSvelteOptions): Plugin;
export {};
