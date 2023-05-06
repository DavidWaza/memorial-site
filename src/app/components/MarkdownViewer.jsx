"use client";
import { useState, useEffect } from "react";
// const remark = require('remark');
// import { remark } from 'unified';
import {remark} from 'remark';
import remarkHtml from "remark-html";

export default function MarkdownViewer({ urls }) {
  const [htmls, setHtmls] = useState([]);

  useEffect(() => {
    async function fetchMarkdowns() {
      const results = await Promise.all(
        urls.map(async (url) => {
          const response = await fetch(url);
          const markdown = await response.text();
          const result = await remark().use(remarkHtml).process(markdown);
          return result.toString();
        })
      );
      setHtmls(results);
    }

    fetchMarkdowns();
  }, [urls]);

  return (
    <div>
      {htmls.map((html, index) => (
        <div key={index} dangerouslySetInnerHTML={{ __html: html }} />
      ))}
    </div>
  );
}
