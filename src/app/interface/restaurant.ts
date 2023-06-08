import { City } from "./city";
import { Meal } from "./meal";

export interface Restaurant { id: number
    name: string;
    email: string;
    phone: string;
    photoUrl: string;
    cities: City[];
    meals: Meal[];
}
