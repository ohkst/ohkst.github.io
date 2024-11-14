#!/bin/bash


JVM_PROJECTS="general-utils mca odin-api odin-core odin-infra"

set -eu

TARGET_DIR="$1"
rm -rf ${TARGET_DIR}
install -d ${TARGET_DIR}

echo "===================================="
echo "JVM 프로젝트 처리"

./gradlew -q bootJar -x test

install -d ${TARGET_DIR}/libs

for PROJECT in ${JVM_PROJECTS}; do
    install -d ${TARGET_DIR}/${PROJECT}
    echo "[${PROJECT}] 소스 파일 복사 중 ..."
    cp -r ${PROJECT}/src ${TARGET_DIR}/${PROJECT}

    echo "[${PROJECT}] 압축 해제 중 ..."
    unzip -q ${PROJECT}/build/libs/${PROJECT}.jar -d ${TARGET_DIR}/${PROJECT}

    echo "[${PROJECT}] Jar 파일 수집 중 ..."
    find ${TARGET_DIR}/${PROJECT} -name "*.jar" -exec mv {} ${TARGET_DIR}/libs \;
done
echo
