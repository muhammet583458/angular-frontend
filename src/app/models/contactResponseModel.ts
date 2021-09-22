import { Contact } from "./contact";
import { ResponseModel } from "./responseModel";

export interface ContactResponseModel extends ResponseModel{
    data:Contact
}