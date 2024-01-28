import {db} from "../lib/server/db";
import {event} from "../lib/server/db/schema";
import {addEventAction} from "../lib/server/db/actions";

	async function getEvent() {
		// console.log(db.select().from(event))
		return db.select().from(event);
	}
export async function load({params}) {
		return {...await getEvent()}
}
