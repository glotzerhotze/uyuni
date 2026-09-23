/*
 * SPDX-FileCopyrightText: 2026 SUSE LLC
 *
 * SPDX-License-Identifier: GPL-2.0-only
 */

import type { ComponentType } from "react";

import * as generatedStories from "./stories.generated";

type GeneratedStory = {
  path: string;
  title: string;
  groupName: string;
  component: ComponentType;
  raw: string;
};

const stories = Object.values(generatedStories) as GeneratedStory[];
const storyGroups = Object.groupBy(stories, (item) => item.groupName);

export default Object.entries(storyGroups).map(([title, groupedStories]) => ({
  title,
  stories: groupedStories ?? [],
}));
