import { createAction, props } from "@ngrx/store";
import { Book } from "../models/book";

export const AddBook = createAction('[Book] Add Book', props<Book>());
export const AddBookSuccess = createAction('[Book] Added Book successfully', props<Book>());
export const AddBookFailure = createAction('[Book] Added Book Failure', props<{error:any}>);

export const RemoveBook = createAction('[Book] REmove Book', props<{bookId: string}>());