import { strings } from '@angular-devkit/core'
import {
    apply,
    applyTemplates,
    chain,
    mergeWith,
    move,
    SchematicContext,
    Tree,
    Rule,
    url,
    externalSchematic,
} from '@angular-devkit/schematics'
import { parseName } from '@schematics/angular/utility/parse-name'

export function component(options: { name: string }): Rule {
    return (_host: Tree, _context: SchematicContext) => {
        return chain([
            // generate default ng component
            externalSchematic('@schematics/angular', 'component', options),
            // add .stories.ts for generated component
            (host: Tree) => {
                const cmpFile = host.actions.find(a => a.path.endsWith('.component.ts'))

                const parsedPath = parseName('', cmpFile!.path.replace('.component.ts', ''))

                const templateSource = apply(url('./files'), [
                    applyTemplates({
                        ...strings,
                        ...options,
                        name: parsedPath.name,
                    }),
                    move(parsedPath.path),
                ])

                return mergeWith(templateSource)
            },
        ])(_host, _context)
    }
}
