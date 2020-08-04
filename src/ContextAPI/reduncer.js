export const initialState = {
  data_menu: [],
  data_mail: [],
  id_account: 0,
  id_menu: 0,
  select_mail: [],
  enable_check: false,
  collapsible_sider: false,
  language: "pt-BR"
}

export function reducer(state, action) {
  switch (action.type) {
    case "setState":
      return {...state,  [action.payload.nested]: action.payload.value };
    default:
      return state
    }
  }