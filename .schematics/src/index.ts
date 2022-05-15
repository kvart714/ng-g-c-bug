import {
    chain,
    SchematicContext,
    Tree,
    Rule,
    externalSchematic,
} from '@angular-devkit/schematics'

export function component(options: { name: string }): Rule {
    return (_host: Tree, _context: SchematicContext) => {
        return chain([
            externalSchematic('@schematics/angular', 'component', options),
        ])(_host, _context)
    }
}
