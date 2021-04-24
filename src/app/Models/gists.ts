interface IBaseGist {
    url: string;
    forks_url: string;
    commits_url: string;
    id: string;
    node_id: string;
    git_pull_url: string;
    git_push_url: string;
    html_url: string;
    created_at: Date;
    updated_at: Date;
    description: string;
    comments: number;
    comments_url: string;
    forkInfo: IForkInfo[];
}

interface IForkInfo {
    createdAt: Date;
    avatar_url: string;
    login: string;
}
interface IFile {
    filename: string;
    language: string;
    raw_url: string;
    size: number;
    type: string;
    tag: string;
}

interface IOwner {
    avatar_url: string;
    events_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    gravatar_id: string;
    html_url: string;
    id: number;
    login: string;
    node_id: string;
    organizations_url: string;
    received_events_url: string;
    repos_url: string;
    side_admin: boolean;
    starred_url: string;
    subscriptions_url: string;
    type: string;
    url: string;
}

interface IUserGist extends IBaseGist {
    public: boolean;
    truncated: boolean;
    files: any;
    owner: IOwner;

}
