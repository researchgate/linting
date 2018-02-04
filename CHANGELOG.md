# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="2.0.1"></a>
## [2.0.1](https://github.com/researchgate/linting/compare/v2.0.0...v2.0.1) (2018-02-04)


### Bug Fixes

* **prettier:** Use local prettier config and add root test folders ([1076db4](https://github.com/researchgate/linting/commit/1076db4))




<a name="2.0.0"></a>
# [2.0.0](https://github.com/researchgate/linting/compare/v1.0.1...v2.0.0) (2017-12-13)


### Bug Fixes

* **deps:** Add missing peer dependency on eslint ([f2b43d2](https://github.com/researchgate/linting/commit/f2b43d2))
* **import:** Add correct default import extension settings ([409b5a7](https://github.com/researchgate/linting/commit/409b5a7))
* **imports:** Allow dev dependencies in tests directory ([c3d52b0](https://github.com/researchgate/linting/commit/c3d52b0))
* **lint:** correctly set sourceType in all configs ([ecb126e](https://github.com/researchgate/linting/commit/ecb126e))
* **no-unused-vars:** Allow rest siblings to be unused ([737ee93](https://github.com/researchgate/linting/commit/737ee93))
* **package:** Ensure latest versions of plugins are required. ([ca5cc3f](https://github.com/researchgate/linting/commit/ca5cc3f))
* **prettier:** Fix conflicting rules check and remove 2 conflicting react rules ([484678c](https://github.com/researchgate/linting/commit/484678c))


### Features

* **jsx:** Require booleans to always be specified ([a6d7a76](https://github.com/researchgate/linting/commit/a6d7a76))
* **no-alert:** Enable no-alert rule ([3db53ce](https://github.com/researchgate/linting/commit/3db53ce))
* **no-use-before-define:** Ignore functions ([b5f8a28](https://github.com/researchgate/linting/commit/b5f8a28))
* **react:** Make prop-types rule an error ([4be64d6](https://github.com/researchgate/linting/commit/4be64d6))
* **rules:** Add 3 new react rules: display-name, no-string-refs, require-render-return ([f88c2f6](https://github.com/researchgate/linting/commit/f88c2f6))


### BREAKING CHANGES

* **no-alert:** alert functions are now not allowed anymore
* **jsx:** Requires boolean flags in jsx to always specify true explicitely
* **rules:** The 3 new react rules might trigger new linting errors
* **react:** The prop-types rule is now an error. Downgrade to warning in project if necessary.
* **package:** Requires newer versions of peer dependencies.
