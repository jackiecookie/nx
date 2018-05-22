import { AbilityBuilder} from "@casl/ability"
import { AuthFromServer, Auth } from "./type"

type AbilityBuilderPara = (
  action: string,
  subject: any,
  field?: string
) => boolean

// export const ability = AbilityBuilder.define((can, cannot) => {
//   cannot("read", "Post")
//   //can('manage', 'Post', { author: 'loggedInUser.id' })
//   //cannot('delete', 'Post', { 'comments.0': { $exists: true } })
// })

function setAbility(auths: Auth[], can: AbilityBuilderPara, subject: string) {
  auths.map(auth => {
    can(auth.action, subject)
  })
}

export function getAbility(response: AuthFromServer) {
  return AbilityBuilder.define(
    (can: AbilityBuilderPara, cannot: AbilityBuilderPara) => {
      response.canDo && setAbility(response.canDo, can, response.subject)
      response.canNotDo &&
        setAbility(response.canNotDo, cannot, response.subject)
    }
  )
}
