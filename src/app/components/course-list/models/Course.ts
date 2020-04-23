export class Course {
    id: number;
    title: string;
    duration: number;
    durationUnit: string;
    description: string;

    constructor(id: number, title: string, duration: number, durationUnit: string, description: string) {
        this.id = id;
        this.title = title;
        this.duration = duration;
        this.durationUnit = durationUnit;
        this.description = description;
    }
}