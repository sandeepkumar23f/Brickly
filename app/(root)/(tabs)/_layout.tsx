import { NativeTabs,Label, Icon } from 'expo-router/unstable-native-tabs';

export default function TabLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <Label>Home</Label>
        <Icon sf="house.fill"/>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="search">
        <Icon sf="magnifyingglass"/>
        <Label>Search</Label>
      </NativeTabs.Trigger>
      {/* Create Property */}

      <NativeTabs.Trigger name="saved">
        <Label>Saved</Label>
        <Icon sf="heart.fill"/>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="profile">
        <Label>Profile</Label>
        <Icon sf="person.fill"/>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
