import { v4 as uuid } from 'uuid';

export class Quest {
    /**
     * Creates a new hero object
     * 
     * @param {*} args A object containing hero properties
     */
    constructor(args) {
        this.id = uuid();
        this.name = args.name || "Sample Quest";
        this.description = args.description || "Default";
        this.heroid = args.heroid;
    }

    /**
     * Updates the quest class with new update values
     * 
     * @param {Partial<Quest>} args The partial quest object
     */
    updateQuest(args) {
        if (args.name) {
            this.name = args.name;
        }
        if (args.description) {
            this.description = args.description;
        }
        if (args.heroid) {
            this.heroid = args.heroid;
        }
    }
}