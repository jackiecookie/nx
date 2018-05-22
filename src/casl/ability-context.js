import { createContext, createElement } from 'react'
import { Can as CanOrigin } from '@casl/react'
import { getAbility } from './ability'

function createContextualCan(Consumer) {
  return function ContextualCan(props) {
    return createElement(Consumer, null, ({ ability, auth }) =>
      createElement(CanOrigin, {
        ability: props.ability || ability,
        I: props.I || props.do,
        a: props.a || props.of || props.this || props.on || auth,
        children: props.children
      })
    )
  }
}

export const AbilityContext = createContext({})
export const Can = createContextualCan(AbilityContext.Consumer)
