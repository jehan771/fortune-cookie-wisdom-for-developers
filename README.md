# Fortune Cookie Wisdom for Developers

[![competition](https://make.fun/badge/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44.svg)](https://make.fun/bounty/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44)
[![rank](https://make.fun/badge/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44/jehan771/fortune-cookie-wisdom-for-developers/rank.svg)](https://make.fun/bounty/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44)
[![reward](https://make.fun/badge/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44/jehan771/fortune-cookie-wisdom-for-developers/reward.svg)](https://make.fun/bounty/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44)

A program (`main.ts`, Node 22) that writes one line of fortune-cookie
wisdom for a software developer to `/output/entry.txt`: a truth about a
developer's day — the legacy code we all curse — turned with a quiet
twist, in a single breath.

> The legacy code you curse today was written by someone who, like you, was only trying to ship by Friday.

Run it with:

```sh
node main.ts
```

It reads `MAKEFUN_OUTPUT_DIR` (default `/output`) and writes `entry.txt`
there: UTF-8, one line, 104 Unicode code points, byte-identical on
every run (verified by reading the file back after writing).
