/**
 * ユーザ情報返却
 */
import { readFileSync, readSync } from 'fs';
import _ from 'lodash';

export type TagInfoType = {
  tag_name: string,
  tag_info: {},
  small_tag: [
    {
      tag_name: string,
      tag_info: {
        images_url: string,
        chat_key: string
      }
    }
  ]
}

type TagDB = TagInfoType[];

export default class {
  private file = './data/tags.json';
  constructor() { }
  getTag = (tag_key: string) => {
    const tagList = JSON.parse(readFileSync(this.file, 'utf-8')) as TagDB;
    const results = _.find(tagList, (tag: TagInfoType) => {
      return tag.tag_name === tag_key;
    });
    console.log(results);
    return results;
  }
}