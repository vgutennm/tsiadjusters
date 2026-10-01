# cPanel deployment

The cpanel-deploy branch contains the tested static build in cpanel-site.zip, with image files copied from src/assets by .cpanel.yml. Lovable updates main. This snapshot does not automatically rebuild when main changes.

For a new release incorporate main, keep this branch's dependency lock/config, remove .url from imported image references in Header.tsx, Footer.tsx and about.tsx, install dependencies with pnpm install --frozen-lockfile and run pnpm build:cpanel. Add dist/client/.htaccess with DirectoryIndex index.html and Options -Indexes. Repackage HTML/JS/CSS/.htaccess as cpanel-site.zip and update the image copy destinations in .cpanel.yml from the new asset names.

In cPanel choose this branch, Update from Remote, then Deploy HEAD Commit. Deployment extracts the tested pages/assets and copies the original images to their compiled names. It does not remove existing files.

Test all four pages on the temporary domain before changing DNS. Configure trusted HTTPS for production and retain email DNS records during cutover.
