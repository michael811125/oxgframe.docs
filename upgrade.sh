#!/bin/bash

echo "🚀 Upgrading Docusaurus packages to the latest version..."

# Install the latest version of Docusaurus and related packages in one line
npm install @docusaurus/core@latest \
  @docusaurus/preset-classic@latest \
  @docusaurus/plugin-content-blog@latest \
  @docusaurus/plugin-content-docs@latest \
  @docusaurus/plugin-content-pages@latest \
  @docusaurus/plugin-debug@latest \
  @docusaurus/plugin-google-analytics@latest \
  @docusaurus/plugin-google-gtag@latest \
  @docusaurus/plugin-google-tag-manager@latest \
  @docusaurus/plugin-sitemap@latest \
  @docusaurus/theme-classic@latest \
  @docusaurus/theme-search-algolia@latest \
  @docusaurus/types@latest \
  @docusaurus/module-type-aliases@latest

echo "✅ Upgrade complete!"
