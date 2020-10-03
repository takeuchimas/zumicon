/**
 * ユーザ情報返却
 */
import { readFileSync, readSync } from 'fs';
import _, { lte } from 'lodash';

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
  private file2 = './data/spTags.json';
  constructor() { }
  getTag = (tag_key: string) => {
    const tagList = JSON.parse(readFileSync(this.file, 'utf-8')) as TagDB;
    const results = _.find(tagList, (tag: TagInfoType) => {
      return tag.tag_name === tag_key;
    });
    console.log(results);
    return results;
  }
  getSpTag = () => {
    const tagList = JSON.parse(readFileSync(this.file2, 'utf-8')) as string[];
    console.log(tagList);
    return tagList;
  }
  getSearchTag = (value: string) => {
    const tagList = JSON.parse(readFileSync(this.file, 'utf-8')) as TagDB;
    let results: string[] = [];
    const Res: string[] = [];
    _.each(tagList, (tag: TagInfoType) => {
      if (~tag.tag_name.indexOf(value)) Res.push(tag.tag_name);
      _.each(tag.small_tag, (smallTag) => {
        if (~smallTag.tag_name.indexOf(value)) Res.push(smallTag.tag_name);
      });
    });
    results = _.uniq(Res);
    return results;
  }
}