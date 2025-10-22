#!/bin/bash

set -e  # اگر خطای غیرقابل‌جبران بیاد، توقف

# 🧱 تعریف پروژه‌ها
declare -A repos=(
  ["Encoder-Decoder-binary"]="https://github.com/gamirhossein792/Encoder-Decoder-binary.git"
  ["weather-app"]="https://github.com/gamirhossein792/weather-app.git"
  ["text-to-speech"]="https://github.com/gamirhossein792/text-to-speech.git"
  ["passwordValidation"]="https://github.com/gamirhossein792/passwordValidation.git"
  ["Multiplication-Table-Generator"]="https://github.com/gamirhossein792/Multiplication-Table-Generator.git"
  ["dynamic-fields"]="https://github.com/gamirhossein792/dynamic-fields.git"
  ["digital-clock"]="https://github.com/gamirhossein792/digital-clock.git"
  ["vite"]="https://github.com/gamirhossein792/vite.git"
  ["task-list"]="https://github.com/gamirhossein792/task-list.git"
  ["github-profile-lookup"]="https://github.com/gamirhossein792/github-profile-lookup.git"
  ["html-calculator"]="https://github.com/gamirhossein792/html-calculator.git"
  ["learnGit"]="https://github.com/gamirhossein792/learnGit.git"
  ["gitVideo"]="https://github.com/gamirhossein792/gitVideo.git"
  ["product-card"]="https://github.com/gamirhossein792/product-card.git"
)

echo "🔍 Checking repo state..."
if [ -n "$(git status --porcelain)" ]; then
  echo "💾 Uncommitted changes found. Committing them first..."
  git add .
  git commit -m "Auto commit: clean working tree before subtree add"
fi

for name in "${!repos[@]}"; do
  url="${repos[$name]}"
  echo -e "\n👉 Adding project: $name"

  # حذف remote اگر از قبل وجود دارد
  git remote remove "$name" 2>/dev/null || true

  # افزودن remote جدید
  git remote add "$name" "$url"

  # اگر پوشه قبلاً وجود دارد (مثلاً ناقص مونده)، حذفش کن
  rm -rf "$name"

  # تلاش برای افزودن پروژه با ۲ بار تلاش در صورت خطا
  attempt=1
  success=false
  while [ $attempt -le 2 ]; do
    echo "   ⏳ Attempt $attempt to add $name..."
    if git subtree add --prefix="$name" "$name" master --squash; then
      success=true
      echo "   ✅ Added $name successfully."
      break
    else
      echo "   ⚠️  Failed attempt $attempt for $name. Retrying..."
      sleep 2
      ((attempt++))
    fi
  done

  if [ "$success" = false ]; then
    echo "❌ Giving up on $name after 2 attempts."
  fi
done

echo -e "\n✅ All projects processed!"
