export type RenderItemTypes = {
  item: itemObjectType;
  index: number;
};

export type itemObjectType = {
  answer_count: number;
  body_markdown: string;
  creation_date: number;
  link: string;
  owner: ownerObjectType;
  question_id: number;
  score: number;
  title: string;
  view_count: number;
};

type ownerObjectType = {
  display_name: string;
  profile_image: string;
};
