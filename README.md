# com.medium.reader-member-story-bypass

## Frida Script for Medium Application: Member-Only Story Access Bypass

This repository contains a Frida script that enables bypassing restrictions in the Medium application, allowing access to member-only stories without requiring a subscription.

### Prerequisites

- [Frida](https://frida.re/): Ensure that Frida is installed on your system. You can install it by following the guidelines provided on the official Frida website.

### Usage

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/gebleksengek/com.medium.reader-member-story-bypass.git
   ```

2. Navigate to the repository's directory:
   
   ```bash
   cd com.medium.reader-member-story-bypass
   ```

3. Run the Frida script using the following command:
   
   ```bash
   frida -U -f com.medium.reader -l script.js
   ```
