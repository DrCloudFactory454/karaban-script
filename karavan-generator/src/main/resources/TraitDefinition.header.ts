/**
 * Generated by karavan build tools - do NOT edit this file!
 */
import {CamelElement} from "./IntegrationDefinition";

export class TraitPropertyMeta {
    name: string
    type: string
    description: string

    constructor(name: string, type: string, description: string) {
        this.name = name;
        this.type = type;
        this.description = description;
    }
}

export class TraitMeta {
    name: string
    platform: boolean
    profiles: string
    description: string
    properties: TraitPropertyMeta[]


    constructor(name: string, platform:boolean, profiles: string, description: string, properties: TraitPropertyMeta[]) {
        this.name = name;
        this.platform = platform;
        this.profiles = profiles;
        this.description = description;
        this.properties = properties;
    }
}
