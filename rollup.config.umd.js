import nodeResolve from 'rollup-plugin-node-resolve';
import { globalsRegex, GLOBAL } from 'rollup-globals-regex';

export default {
    entry: 'dist/bundles/test-ng-npm.es5.js',
    dest: 'dist/bundles/test-ng-npm.umd.js',
    format: 'umd',
    moduleName: 'httpInterceptor',
    plugins: [
        nodeResolve({ jsnext: true, browser: true })
    ],
    globals: globalsRegex({
        'tslib': 'tslib',
        [GLOBAL.NG2]: GLOBAL.NG2.TPL,
        [GLOBAL.RX]: GLOBAL.RX.TPL,
        [GLOBAL.RX_OBSERVABLE]: GLOBAL.RX_OBSERVABLE.TPL,
        [GLOBAL.RX_OPERATOR]: GLOBAL.RX_OPERATOR.TPL,
    }),
    external: (moduleId) => {
        if (/^(\@angular|rxjs)\/?/.test(moduleId)) {
            return true;
        }

        return false;
    }
}
