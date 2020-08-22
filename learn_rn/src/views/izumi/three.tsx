import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, StyleSheet, Button } from "react-native";
import { GLView, ExpoWebGLRenderingContext } from 'expo-gl';
import { Asset } from 'expo-asset';
import * as THREE from "three";
import ExpoTHREE from 'expo-three';

export default function Three({ navigation }: any) {
  let three = new ThreeRenderer();
  return (
    <GLView
      style={{ flex: 1 }}
      onContextCreate={three.onGLContextCreate}
    />
  );
}

class ThreeRenderer {
  constructor() { }
  onGLContextCreate = async (gl: ExpoWebGLRenderingContext) => {
    const renderer = new ExpoTHREE.Renderer({ gl });
    renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75, gl.drawingBufferWidth / gl.drawingBufferHeight, 0.1, 1000
    );

    // オブジェクト追加処理
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    // テクスチャを読み込み
    const texture = new ExpoTHREE.TextureLoader().load(require('../../../assets/three/threeImage.png'));
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // カメラ位置を調整
    camera.position.z = 5;

    // アニメーション
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.04;
      cube.rotation.y += 0.02;
      renderer.render(scene, camera);
      gl.endFrameEXP();
    }
    animate();

    // 画像読み込み処理
    // const imageUri = await this.loadImage('../assets/three/threeImage.png');
    // if (imageUri === null) return; // 描画が終了しちゃうかも。。。
    // const texture = new THREE.TextureLoader().load(imageUri);
  };
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
