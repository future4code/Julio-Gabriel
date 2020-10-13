export class Show{
    constructor(
        private id: string,
        private week_day: string,
        private start_time: Number,
        private end_time: Number,
        private band_id: string,
    ){}

    getId(){
        return this.id;
    }

    getWeekDay(){
        return this.week_day;
    }

    getStartTime(){
        return this.start_time;
    }

    getEndTime(){
        return this.end_time;
    }

    getBandId(){
        return this.band_id;
    }

    setId(id: string){
        this.id = id;
    }

    setWeekDay(week_day: string){
        this.week_day = week_day;
    }

    setStartTime(start_time: string){
        this.start_time = Number(start_time);
    }

    setEndTime(end_time: string){
        this.end_time = Number(end_time);
    }

    setBandId(band_id: string){
        this.band_id = band_id;
    }

    static toUserModel(show: any): Show {
        return (show && new Show(show.id, show.week_day, show.start_time, show.end_time, show.band_id))
    }
}

export interface ShowInputDTO{
    week_day: string;
    start_time: Number;
    end_time: Number;
    band_id: string
}

export interface ShowOutputDTO {
    name: string,
    music_genre: string
}

export enum WeekDay{
    SEXTA = "SEXTA",
    SÁBADO = "SÁBADO",
    DOMINGO = "DOMINGO"
}