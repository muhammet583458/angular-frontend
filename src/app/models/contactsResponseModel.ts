import { Contact } from "./contact";
import { ResponseModel } from "./responseModel";

export interface ContactsResponseModel extends ResponseModel{
    data:Contact[]
}