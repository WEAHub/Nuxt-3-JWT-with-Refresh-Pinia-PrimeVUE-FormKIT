import { HttpStatusCode } from "axios";
import { deleteUser } from "~/server/models/user";
import { APIMessage } from "~/types/APIMessage";
import { UserModel } from "~/types/User";

export default defineEventHandler(async (event) => {
  await protectRoute(event)
  const id: string = event.context.params?.id!;
  
  const userDeletedConfirm = await deleteUser(id);

  if(!userDeletedConfirm) {
    return createError({
      statusCode: HttpStatusCode.BadRequest,
      message: 'Can\'t delete this user',
    })
  }

  const deleteResponse: APIMessage<Partial<UserModel>> = {
    title: 'User Deletee',
    message: 'User deleted successfully!',
    payload: { id }
  }

  return deleteResponse
})