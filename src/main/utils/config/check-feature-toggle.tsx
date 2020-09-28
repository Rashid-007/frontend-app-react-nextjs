export function isFeatureEnabled(feature: string ): boolean {
    let switches = {};

    try {
        switches = JSON.parse(process.env.FEATURE_TOGGLE || '{}');
    } catch (error) {
        // todo: error handling
    }
    if (switches && switches[feature]) {
        return true;
    }

    return false;
}