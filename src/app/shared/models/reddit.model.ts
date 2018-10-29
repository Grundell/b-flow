export interface redditSearch {
  data: redditData;
  kind: string;
}

export interface redditData{
  after: string;
  before: string;
  children: redditChildren;
}

export interface redditChildren {
  kind: string;
  data: redditPost[];
}

export interface redditPost {
  approved_at_utc: number;
  approved_by: string;
  archived: boolean;
  author: string;
  author_flair_background_color: string;
  author_flair_css_class: string;
  author_flair_richtext: any[];
  author_flair_template_id: any;
  author_flair_text: string;
  author_flair_text_color: string;
  author_flair_type: string;
  author_fullname: string;
  author_patreon_flair: boolean;
  banned_at_utc: any;
  banned_by: string;
  can_gild: boolean;
  can_mod_post: boolean
  category: any;
  clicked: boolean;
  content_categories: any;
  contest_mode: boolean;
  created: number;
  created_utc: number;
  distinguished: string;
  domain: string;
  downs: number;
  edited: boolean;
  gilded: number;
  gildings: {
      gid_1: number;
      gid_2: number; 
      gid_3: number;
    };
  hidden: boolean;
  hide_score: boolean;
  id: string;
  is_crosspostable: boolean;
  is_meta: boolean;
  is_original_content: boolean;
  is_reddit_media_domain: boolean;
  is_robot_indexable: boolean;
  is_self: boolean;
  is_video: boolean;
  likes: any;
  link_flair_background_color: string;
  link_flair_css_class: string;
  link_flair_richtext: any[];
  link_flair_template_id: any;
  link_flair_text: string;
  link_flair_text_color: string;
  link_flair_type: string;
  locked: boolean;
  media: any;
  media_embed: any;
  media_only: boolean;
  mod_note: any;
  mod_reason_by: any;
  mod_reason_title: any;
  mod_reports: any[];
  name: string;
  no_follow: boolean;
  num_comments: number;
  num_crossposts: number;
  num_reports: number;
  over_18: boolean;
  parent_whitelist_status: string;
  permalink: string;
  pinned: boolean;
  pwls: number;
  quarantine: boolean;
  removal_reason: string;
  report_reasons: string;
  saved: boolean;
  score: number;
  secure_media: any;
  secure_media_embed: any;
  selftext: string;
  selftext_html: string;
  send_replies: boolean;
  spoiler: boolean;
  stickied: boolean;
  subreddit: string;
  subreddit_id: string;
  subreddit_name_prefixed: string;
  subreddit_subscribers: number;
  subreddit_type: string;
  suggested_sort: any;
  thumbnail: string;
  thumbnail_height: number;
  thumbnail_width: number;
  title: string;
  ups: number;
  url: string;
  user_reports: any[];
  view_count: any;
  visited: boolean;
  whitelist_status: string;
  wls: number;
}
