export interface Auth {
  action: string
  filed: string
}

export interface AuthFromServer {
  subject: string
  canDo?: Auth[]
  canNotDo?: Auth[]
}
