/**
 * Base Gist
 */
export interface BaseGist {
  url: string
  forks_url: string
  commits_url: string
  id: string
  node_id: string
  git_pull_url: string
  git_push_url: string
  html_url: string
  files: {
    [k: string]: {
      filename?: string
      type?: string
      language?: string
      raw_url?: string
      size?: number
      [k: string]: unknown
    }
  }
  public: boolean
  created_at: string
  updated_at: string
  description: string | null
  comments: number
  user: null | SimpleUser
  comments_url: string
  owner?: SimpleUser1
  truncated?: boolean
  forks?: unknown[]
  history?: unknown[]
  [k: string]: unknown
}
/**
 * A GitHub user.
 */
export interface SimpleUser {
  name?: string | null
  email?: string | null
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string | null
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
  starred_at?: string
  [k: string]: unknown
}
/**
 * A GitHub user.
 */
export interface SimpleUser1 {
  name?: string | null
  email?: string | null
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string | null
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
  starred_at?: string
  [k: string]: unknown
}

export type MySchema = MinimalRepository[]

/**
 * Minimal Repository
 */
export interface MinimalRepository {
  id: number
  node_id: string
  name: string
  full_name: string
  owner: SimpleUser
  private: boolean
  html_url: string
  description: string | null
  fork: boolean
  url: string
  archive_url: string
  assignees_url: string
  blobs_url: string
  branches_url: string
  collaborators_url: string
  comments_url: string
  commits_url: string
  compare_url: string
  contents_url: string
  contributors_url: string
  deployments_url: string
  downloads_url: string
  events_url: string
  forks_url: string
  git_commits_url: string
  git_refs_url: string
  git_tags_url: string
  git_url?: string
  issue_comment_url: string
  issue_events_url: string
  issues_url: string
  keys_url: string
  labels_url: string
  languages_url: string
  merges_url: string
  milestones_url: string
  notifications_url: string
  pulls_url: string
  releases_url: string
  ssh_url?: string
  stargazers_url: string
  statuses_url: string
  subscribers_url: string
  subscription_url: string
  tags_url: string
  teams_url: string
  trees_url: string
  clone_url?: string
  mirror_url?: string | null
  hooks_url: string
  svn_url?: string
  homepage?: string | null
  language?: string | null
  forks_count?: number
  stargazers_count?: number
  watchers_count?: number
  /**
   * The size of the repository. Size is calculated hourly. When a repository is initially created, the size is 0.
   */
  size?: number
  default_branch?: string
  open_issues_count?: number
  is_template?: boolean
  topics?: string[]
  has_issues?: boolean
  has_projects?: boolean
  has_wiki?: boolean
  has_pages?: boolean
  has_downloads?: boolean
  has_discussions?: boolean
  archived?: boolean
  disabled?: boolean
  visibility?: string
  pushed_at?: string | null
  created_at?: string | null
  updated_at?: string | null
  permissions?: {
    admin?: boolean
    maintain?: boolean
    push?: boolean
    triage?: boolean
    pull?: boolean
    [k: string]: unknown
  }
  role_name?: string
  temp_clone_token?: string
  delete_branch_on_merge?: boolean
  subscribers_count?: number
  network_count?: number
  code_of_conduct?: CodeOfConduct
  license?: {
    key?: string
    name?: string
    spdx_id?: string
    url?: string
    node_id?: string
    [k: string]: unknown
  } | null
  forks?: number
  open_issues?: number
  watchers?: number
  allow_forking?: boolean
  web_commit_signoff_required?: boolean
  security_and_analysis?: {
    advanced_security?: {
      status?: "enabled" | "disabled"
      [k: string]: unknown
    }
    /**
     * Enable or disable Dependabot security updates for the repository.
     */
    dependabot_security_updates?: {
      /**
       * The enablement status of Dependabot security updates for the repository.
       */
      status?: "enabled" | "disabled"
      [k: string]: unknown
    }
    secret_scanning?: {
      status?: "enabled" | "disabled"
      [k: string]: unknown
    }
    secret_scanning_push_protection?: {
      status?: "enabled" | "disabled"
      [k: string]: unknown
    }
    [k: string]: unknown
  } | null
  [k: string]: unknown
}
/**
 * A GitHub user.
 */
export interface SimpleUser {
  name?: string | null
  email?: string | null
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string | null
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
  starred_at?: string
  [k: string]: unknown
}
/**
 * Code Of Conduct
 */
export interface CodeOfConduct {
  key: string
  name: string
  url: string
  body?: string
  html_url: string | null
  [k: string]: unknown
}

export interface Root {
  type: string
  items: Items
}

export interface Items {
  title: string
  description: string
  type: string
  properties: Properties
  required: string[]
}

export interface Properties {
  url: Url
  id: Id
  node_id: NodeId
  sha: Sha
  ref: Ref
  task: Task
  payload: Payload
  original_environment: OriginalEnvironment
  environment: Environment
  description: Description
  creator: Creator
  created_at: CreatedAt
  updated_at: UpdatedAt
  statuses_url: StatusesUrl
  repository_url: RepositoryUrl
  transient_environment: TransientEnvironment
  production_environment: ProductionEnvironment
  performed_via_github_app: PerformedViaGithubApp
}

export interface Url {
  type: string
  format: string
  examples: string[]
}

export interface Id {
  description: string
  type: string
  examples: number[]
}

export interface NodeId {
  type: string
  examples: string[]
}

export interface Sha {
  type: string
  examples: string[]
}

export interface Ref {
  description: string
  type: string
  examples: string[]
}

export interface Task {
  description: string
  type: string
  examples: string[]
}

export interface Payload {
  oneOf: OneOf[]
}

export interface OneOf {
  type: string
  additionalProperties?: boolean
}

export interface OriginalEnvironment {
  type: string
  examples: string[]
}

export interface Environment {
  description: string
  type: string
  examples: string[]
}

export interface Description {
  type: string[]
  examples: string[]
}

export interface Creator {
  anyOf: AnyOf[]
}

export interface AnyOf {
  type: string
  title?: string
  description?: string
  properties?: Properties2
  required?: string[]
}

export interface Properties2 {
  name: Name
  email: Email
  login: Login
  id: Id2
  node_id: NodeId2
  avatar_url: AvatarUrl
  gravatar_id: GravatarId
  url: Url2
  html_url: HtmlUrl
  followers_url: FollowersUrl
  following_url: FollowingUrl
  gists_url: GistsUrl
  starred_url: StarredUrl
  subscriptions_url: SubscriptionsUrl
  organizations_url: OrganizationsUrl
  repos_url: ReposUrl
  events_url: EventsUrl
  received_events_url: ReceivedEventsUrl
  type: Type
  site_admin: SiteAdmin
  starred_at: StarredAt
}

export interface Name {
  type: string[]
}

export interface Email {
  type: string[]
}

export interface Login {
  type: string
  examples: string[]
}

export interface Id2 {
  type: string
  examples: number[]
}

export interface NodeId2 {
  type: string
  examples: string[]
}

export interface AvatarUrl {
  type: string
  format: string
  examples: string[]
}

export interface GravatarId {
  type: string[]
  examples: string[]
}

export interface Url2 {
  type: string
  format: string
  examples: string[]
}

export interface HtmlUrl {
  type: string
  format: string
  examples: string[]
}

export interface FollowersUrl {
  type: string
  format: string
  examples: string[]
}

export interface FollowingUrl {
  type: string
  examples: string[]
}

export interface GistsUrl {
  type: string
  examples: string[]
}

export interface StarredUrl {
  type: string
  examples: string[]
}

export interface SubscriptionsUrl {
  type: string
  format: string
  examples: string[]
}

export interface OrganizationsUrl {
  type: string
  format: string
  examples: string[]
}

export interface ReposUrl {
  type: string
  format: string
  examples: string[]
}

export interface EventsUrl {
  type: string
  examples: string[]
}

export interface ReceivedEventsUrl {
  type: string
  format: string
  examples: string[]
}

export interface Type {
  type: string
  examples: string[]
}

export interface SiteAdmin {
  type: string
}

export interface StarredAt {
  type: string
  examples: string[]
}

export interface CreatedAt {
  type: string
  format: string
  examples: string[]
}

export interface UpdatedAt {
  type: string
  format: string
  examples: string[]
}

export interface StatusesUrl {
  type: string
  format: string
  examples: string[]
}

export interface RepositoryUrl {
  type: string
  format: string
  examples: string[]
}

export interface TransientEnvironment {
  description: string
  type: string
  examples: boolean[]
}

export interface ProductionEnvironment {
  description: string
  type: string
  examples: boolean[]
}

export interface PerformedViaGithubApp {
  anyOf: AnyOf2[]
}

export interface AnyOf2 {
  type: string
  title?: string
  description?: string
  properties?: Properties3
  required?: string[]
}

export interface Properties3 {
  id: Id3
  slug: Slug
  node_id: NodeId3
  owner: Owner
  name: Name3
  description: Description2
  external_url: ExternalUrl
  html_url: HtmlUrl3
  created_at: CreatedAt2
  updated_at: UpdatedAt2
  permissions: Permissions
  events: Events
  installations_count: InstallationsCount
  client_id: ClientId
  client_secret: ClientSecret
  webhook_secret: WebhookSecret
  pem: Pem
}

export interface Id3 {
  description: string
  type: string
  examples: number[]
}

export interface Slug {
  description: string
  type: string
  examples: string[]
}

export interface NodeId3 {
  type: string
  examples: string[]
}

export interface Owner {
  anyOf: AnyOf3[]
}

export interface AnyOf3 {
  type: string
  title?: string
  description?: string
  properties?: Properties4
  required?: string[]
}

export interface Properties4 {
  name: Name2
  email: Email2
  login: Login2
  id: Id4
  node_id: NodeId4
  avatar_url: AvatarUrl2
  gravatar_id: GravatarId2
  url: Url3
  html_url: HtmlUrl2
  followers_url: FollowersUrl2
  following_url: FollowingUrl2
  gists_url: GistsUrl2
  starred_url: StarredUrl2
  subscriptions_url: SubscriptionsUrl2
  organizations_url: OrganizationsUrl2
  repos_url: ReposUrl2
  events_url: EventsUrl2
  received_events_url: ReceivedEventsUrl2
  type: Type2
  site_admin: SiteAdmin2
  starred_at: StarredAt2
}

export interface Name2 {
  type: string[]
}

export interface Email2 {
  type: string[]
}

export interface Login2 {
  type: string
  examples: string[]
}

export interface Id4 {
  type: string
  examples: number[]
}

export interface NodeId4 {
  type: string
  examples: string[]
}

export interface AvatarUrl2 {
  type: string
  format: string
  examples: string[]
}

export interface GravatarId2 {
  type: string[]
  examples: string[]
}

export interface Url3 {
  type: string
  format: string
  examples: string[]
}

export interface HtmlUrl2 {
  type: string
  format: string
  examples: string[]
}

export interface FollowersUrl2 {
  type: string
  format: string
  examples: string[]
}

export interface FollowingUrl2 {
  type: string
  examples: string[]
}

export interface GistsUrl2 {
  type: string
  examples: string[]
}

export interface StarredUrl2 {
  type: string
  examples: string[]
}

export interface SubscriptionsUrl2 {
  type: string
  format: string
  examples: string[]
}

export interface OrganizationsUrl2 {
  type: string
  format: string
  examples: string[]
}

export interface ReposUrl2 {
  type: string
  format: string
  examples: string[]
}

export interface EventsUrl2 {
  type: string
  examples: string[]
}

export interface ReceivedEventsUrl2 {
  type: string
  format: string
  examples: string[]
}

export interface Type2 {
  type: string
  examples: string[]
}

export interface SiteAdmin2 {
  type: string
}

export interface StarredAt2 {
  type: string
  examples: string[]
}

export interface Name3 {
  description: string
  type: string
  examples: string[]
}

export interface Description2 {
  type: string[]
  examples: string[]
}

export interface ExternalUrl {
  type: string
  format: string
  examples: string[]
}

export interface HtmlUrl3 {
  type: string
  format: string
  examples: string[]
}

export interface CreatedAt2 {
  type: string
  format: string
  examples: string[]
}

export interface UpdatedAt2 {
  type: string
  format: string
  examples: string[]
}

export interface Permissions {
  description: string
  type: string
  properties: Properties5
  additionalProperties: AdditionalProperties
  example: Example
}

export interface Properties5 {
  issues: Issues
  checks: Checks
  metadata: Metadata
  contents: Contents
  deployments: Deployments
}

export interface Issues {
  type: string
}

export interface Checks {
  type: string
}

export interface Metadata {
  type: string
}

export interface Contents {
  type: string
}

export interface Deployments {
  type: string
}

export interface AdditionalProperties {
  type: string
}

export interface Example {
  issues: string
  deployments: string
}

export interface Events {
  description: string
  type: string
  items: Items2
  examples: string[]
}

export interface Items2 {
  type: string
}

export interface InstallationsCount {
  description: string
  type: string
  examples: number[]
}

export interface ClientId {
  type: string
  examples: string[]
}

export interface ClientSecret {
  type: string
  examples: string[]
}

export interface WebhookSecret {
  type: string[]
  examples: string[]
}

export interface Pem {
  type: string
  examples: string[]
}
