import { DateTime } from "luxon";

export class TestDate{
    static async Print() {
    return DateTime.now();
    }
}