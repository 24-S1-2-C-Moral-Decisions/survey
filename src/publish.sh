#! /bin/bash
mkdir -p build

cp *.html build/
cp -r css/ build/css
cp -r img/ build/img
cp -r js/ build/js

for dir in moral-survey-*; do
    if [ -d "$dir" ]; then
    echo "Package $dir"
    mkdir -p build/$dir
    cp -r $dir/*.html build/$dir/
    cp -r $dir/index.js build/$dir/
    cp -r $dir/js/ build/$dir/
    cp -r $dir/content/ build/$dir/
    cp -r $dir/i18n/ build/$dir/
    cp -r $dir/img/ build/$dir/
    fi
done
