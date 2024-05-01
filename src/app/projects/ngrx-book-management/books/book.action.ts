import { createAction, props } from "@ngrx/store";
import { Book } from "../models/book";

export const AddBook = createAction('[Book] Add Book', props<Book>());
export const RemoveBook = createAction('[Book] REmove Book', props<{bookId: string}>());