export class Candidat{

    constructor(
        public id:number,
        public firstname: string,
        public lastname: string,
        public jobName: string,
        public jobDescription: string,
        public age: number,
        public motto: string,
        public nbFollowers: number,
        public nbFollowings: number,
        public nbProjects: number,
        public avatar: string,
        public thumbnail: string
    ){}
}