# Analytics event contract

Both `dhruvsaija.in` and `blog.dhruvsaija.in` send events to GA4 property `G-VCXJRPHM7S` only in production. The implementation records no form contents, email addresses, visitor identifiers, or URL query strings.

## Events

| Event | Fired when | Parameters |
| --- | --- | --- |
| `email_click` | A visitor selects a `mailto:` link. | `link_url`, `link_text`, `link_location` |
| `github_click` | A visitor opens the public GitHub profile link. | `link_url`, `link_text`, `link_location` |
| `portfolio_to_blog` | A visitor follows a link from the portfolio to the blog. | `link_url`, `link_text`, `link_location` |
| `blog_to_portfolio` | A visitor follows a link from the blog to the portfolio. | `link_url`, `link_text`, `link_location` |
| `resume_download` | A visitor opens a PDF link. | `link_url`, `link_text`, `link_location` |
| `blog_post_view` | A visitor opens a published article route. | `post_path` |

`link_location` is one of `header`, `footer`, `contact`, `writing`, `projects`, `article`, `post_card`, or `content`.

## GA4 reporting

Mark `email_click` as a key event only if contact intent becomes the primary portfolio conversion. Use Explorations or reports to compare the event count against landing page and source/medium. Do not create ad audiences or enable advertising features solely for this portfolio analytics setup.
